import sequelize from "sequelize";
import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Usuario extends Model {
    public nombre!: string;
    public correo!: string;
    public telefono!: string;
    public direccion!: string;
    public activo!: boolean;
}

export interface UsuarioI {
    nombre: string;
    correo: string;
    telefono: string;
    direccion: string;
    activo: boolean;
}


Usuario.init(
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        correo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefono: {
            type: DataTypes.STRING,
            allowNull: false
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        activo: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        },
    },
    {
        tableName: "usuarios",
        sequelize: database,
        timestamps: false
    }
    
)