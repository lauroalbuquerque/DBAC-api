import { Sequelize, Model, DataTypes } from 'sequelize';
import { sequelize } from '../plugins/sequelize'

const Pessoa = sequelize.define('pessoa', {
    id: { type: DataTypes.UUID, primaryKey: true },
    nome: DataTypes.TEXT,
    cpf: DataTypes.TEXT,
    dataNascimento: DataTypes.DATE
});

(async () => {
    await sequelize.sync();
})();

export default Pessoa;