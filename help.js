export default function help() {
    console.log(`
        Comando: "agregar" este comando permite agregar producto, se usa:\n"npm start agregar {id} {nombre} {precio} {categoria}"\n\n
        Comando: "obtener" este comando permite obtener todos los productos o uno solo con su id, se usa:\n"npm start obtener {id}"\n\n
        Comando: "actualizar" este comando permite actualizar los daatos de un producto con su id y el dato nuevo, se usa:\n"npm start npm start actualizar {id} {nombre} {precio} {categoria}"\n\n
        Comando: "eliminar" este comando permite elimnar un producto con su id, se usa:\n"npm start eliminar {id}"\n\n
        Comando: "servidor" este comando permite crear un host, se usa:\n"npm start servidor"\n\n
        `)
}