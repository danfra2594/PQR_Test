export class Caso {
    public Id: number;
    public Caso: string;
    public Identificacion: number;
    public Nombre: string;
    public Direccion: string;
    public Telefono: string;
    public Email: string;
    public Mensaje: string;
    public Fecha: string;

    constructor(id, caso, identificacion, nombre, direccion, telefono, email, mensaje) {
        this.Id = id;
        this.Caso = caso;
        this.Identificacion = identificacion;
        this.Nombre = nombre;
        this.Direccion = direccion;
        this.Telefono = telefono;
        this.Email = email;
        this.Mensaje = mensaje;
    }
}
