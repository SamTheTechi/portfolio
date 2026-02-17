import { useEffect } from 'react';

const GLITCH_CHARACTERS =
  'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝ' +
  'ｶﾞｷﾞｸﾞｹﾞｺﾞｻﾞｼﾞｽﾞｾﾞｿﾞﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟ' +
  'ｧｨｩｪｫｬｭｮｯｰﾞﾟ' +
  '0123456789';

const shouldGlitchChar = (char: string) => /[A-Za-z]/.test(char);

const randomGlitchChar = () =>
  GLITCH_CHARACTERS[Math.floor(Math.random() * GLITCH_CHARACTERS.length)];

const scrambleText = (text: string, intensity: number) =>
  text
    .split('')
    .map((char) => (shouldGlitchChar(char) && Math.random() < intensity ? randomGlitchChar() : char))
    .join('');

const getTextNodes = (root: HTMLElement) => {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => {
      if (!node.textContent || !node.textContent.trim()) {
        return NodeFilter.FILTER_REJECT;
      }

      const parent = node.parentElement;
      if (!parent || parent.closest('[data-no-glitch], .no-glitch')) {
        return NodeFilter.FILTER_REJECT;
      }

      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const nodes: Text[] = [];
  let current = walker.nextNode();
  while (current) {
    nodes.push(current as Text);
    current = walker.nextNode();
  }

  return nodes;
};

const TextGlitch = () => {
  useEffect(() => {
    const root = document.getElementById('main-content');
    if (!root) return;

    const textNodes = getTextNodes(root);
    const originals = new Map<Text, string>();

    textNodes.forEach((node) => {
      originals.set(node, node.textContent ?? '');
    });

    let timeoutId: number | undefined;
    const activeRestores = new Set<number>();
    let isMounted = true;

    const glitchOnce = () => {
      if (!isMounted || textNodes.length === 0) return;

      const batchSize = Math.max(1, Math.floor(Math.random() * 5) + 3);
      const intensity = 0.3 + Math.random() * 0.4;
      const duration = 280 + Math.random() * 420;
      const shuffled = [...textNodes].sort(() => Math.random() - 0.5).slice(0, batchSize);

      shuffled.forEach((node) => {
        const original = originals.get(node);
        if (!original) return;
        node.textContent = scrambleText(original, intensity);
      });

      const restoreId = window.setTimeout(() => {
        shuffled.forEach((node) => {
          const original = originals.get(node);
          if (!original) return;
          node.textContent = original;
        });
        activeRestores.delete(restoreId);
      }, duration);

      activeRestores.add(restoreId);

      const nextDelay = 850 + Math.random() * 1700;
      timeoutId = window.setTimeout(glitchOnce, nextDelay);
    };

    const startDelay = window.setTimeout(glitchOnce, 4200);

    return () => {
      isMounted = false;
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
      window.clearTimeout(startDelay);
      activeRestores.forEach((id) => window.clearTimeout(id));
      activeRestores.clear();

      textNodes.forEach((node) => {
        const original = originals.get(node);
        if (original) node.textContent = original;
      });
    };
  }, []);

  return null;
};

export default TextGlitch;
