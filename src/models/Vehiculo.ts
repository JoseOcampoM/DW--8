import sequelize from "sequelize";
import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Marca } from "./Marca";
import { TipoVehiculo } from "./TipoVehiculo";
import { Venta } from "./Venta";
import { VehiculoVenta, VehiculoVentaI } from "./VehiculoVenta";

export class Vehiculo extends Model {
    public modelo!: string;
    public color!: string;
    public placa!: string;
    public motor!: string;
    public MarcaId!: number;
    public TipoVehiculoId!: number;
}

export interface VehiculoI {
    modelo: string;
    color: string;
    placa: string;
    motor: string;
    MarcaId: number;
    TipoVehiculoId: number;
}

Vehiculo.init(
    {
        modelo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false
        },
        placa: {
            type: DataTypes.STRING,
            allowNull: false
        },  
        motor: {
            type: DataTypes.STRING,
            allowNull: false
        },  
    },
    {
        tableName: "vehiculo",
        sequelize: database,
        timestamps: false
    }
    
)

Marca.hasMany(Vehiculo);
Vehiculo.belongsTo(Marca);

TipoVehiculo.hasMany(Vehiculo);
Vehiculo.belongsTo(TipoVehiculo);

Venta.belongsToMany(Vehiculo, {through: VehiculoVenta})
Vehiculo.belongsToMany(Venta, {through: VehiculoVenta})
