export class Respuesta {
    public Id: number;
    public IdRegister: string;
    public RespuestaAdmin: boolean;
    public RespuestaUser: boolean;
    public Mensaje: string;
    public Fecha: string;

    constructor(id, idRegister, respuestaAdmin, respuestaUser, mensaje) {
        this.Id = id;
        this.IdRegister = idRegister;
        this.RespuestaAdmin = respuestaAdmin;
        this.RespuestaUser = respuestaUser;
        this.Mensaje = mensaje;
    }
}
