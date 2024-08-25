const nombre = "Nombre del Grupo:";

const nombre2 = "Compositor:";

const año = "Año de fundación:";

const si = "Activo: true";

const no = "Activo: false";

const PopRock = "🎵 Pop Rock";

const Rock = "🎸 Rock";

const HardRock = "🤘 Hard Rock";

const Clasica = "🎼 Clásica";

const style = "color: green ; font-size: 18px ; font-weight: bold";

const PrimerGrupo = `%c${nombre} The Beatles, ${año} 1960, ${si}, genero: ${PopRock}`;

const SegundoGrupo = `%c${nombre} Queen, ${año} 1970, ${no}, genero: ${Rock}`;

const TercerGrupo = `%c${nombre} ACDC, ${año} 1973, ${si}, genero: ${HardRock}`;

const CuartoGrupo = `%c${nombre2} Ludwig van Beethoven, ${año} 1770, ${no}, genero: ${Clasica}`;

const QuintoGrupo = `%c${nombre} The Rolling Stones, ${año} 1962, ${si}, genero: ${Rock}`;

console.log(PrimerGrupo, style);

console.log(SegundoGrupo, style);

console.log(TercerGrupo, style);

console.log(CuartoGrupo, style);

console.log(QuintoGrupo, style);