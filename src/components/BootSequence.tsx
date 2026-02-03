import React from 'react';

const BootSequence: React.FC = () => (
  <div id="boot-sequence" className="fixed top-0 left-0 w-screen h-screen bg-black z-[9999] p-8">
    <p className="boot-line opacity-0 whitespace-pre" id="line1">AKTU BIOS v2.3 ... Copyright (C) 1999, AKTU Corp.</p>
    <p className="boot-line opacity-0 whitespace-pre" id="line2">Memory Test: 65536K OK</p>
    <p className="boot-line opacity-0 whitespace-pre" id="line3">Loading portfolio.sys...</p>
    <p className="boot-line opacity-0 whitespace-pre" id="line4">Booting from Hard Disk...</p>
  </div>
);

export default BootSequence;
