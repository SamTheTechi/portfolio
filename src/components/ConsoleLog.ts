export function ConsoleLog() {
  console.log(String.raw`
⣿⣿⣿⣿⣿⣿⣿⡿⣿⣫⢿⣿⡿⣡⡏⣽⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡇⣧⡏⢼⣫⣖⣛⣙⣛⡿⢿⣿⣿⣿⣿⣿
⣿⣿⣿⡿⣻⡭⣭⣅⣹⣷⣿⣿⡯⠽⣛⣻⢿⣐⣪⠭⠭⢿⣿
⣿⣿⡯⢞⣫⣾⣹⣿⣿⣿⣿⣿⡿⣟⣦⡹⣿⣷⡾⣴⣚⠿⠿
⣷⣶⣿⠏⣿⣿⣿⣿⢿⣿⡏⠹⡟⣟⡞⢿⡽⠨⠩⡢⢱⣶⣿
⡟⢋⣤⢸⣿⣯⣿⢻⠞⡸⣇⡇⡇⢸⣽⢢⣳⡈⡔⡑⢣⢿⣿
⣿⣿⡏⠣⣧⢿⡞⣏⣌⠱⡽⠠⢱⣧⠓⢪⠷⠃⣝⣆⢠⣸⣿
⣿⣟⡴⡀⡌⡃⠻⠹⠙⠎⠀⠀⠀⠈⣓⠀⠀⠀⠀⣮⣊⣿⣿
⣿⣿⣿⢣⡖⠐⡢⢿⣾⣿⣦⣤⣤⣼⣿⣷⣤⣤⢀⣿⣿⣿⣿
⣿⣿⣿⣿⣿⠀⣝⢾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿
⣿⣿⣿⣿⡿⠿⢸⣿⣮⣿⣿⣿⣿⣯⡻⣻⡿⢃⣼⣿⣿⣿⣿
⣿⣿⣿⣿⡇⠀⠈⠛⠿⣷⣍⢛⠿⠿⣿⢏⣴⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠉⠛⠦⠈⠺⢿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⡿⠁⠀⠀⠀⠀⠄⡀⠀⠀⠀⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿
⣿⢟⣠⣾⣦⣠⣤⣤⡀⠀⠁⠀⠀⠀⠀⠘⢿⣿⣿⣿⣿⣿⣿
`)
  const comment = document.createComment(
    "You inspect things, I like that, here's a little gift for ya <3, https://open.spotify.com/track/0i2THDeAhJma8FrUVy90No?si=129a13c781c24cc0"
  );
  document.querySelector("body")?.appendChild(comment);
}



