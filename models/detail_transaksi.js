'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detail_transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // tabel detail ke tabel paket 
      this.belongsTo(models.paket, {
        foreignKey: 'id_paket', as: "paket"
      })
    }
  };
  detail_transaksi.init({
    id_transaksi: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    id_paket: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    qty: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'detail_transaksi',
    tableName: 'detail_transaksi'
  });
  return detail_transaksi;
};

// "id_member": 2,
//     "tanggal": "2021-10-26",
//     "batas_waktu": "2021-10-31",
//     "tanggal_bayar": null,
//     "dibayar": 0,
//     "id_user": 1,
//     "detail_transaksi": [
//         {
//             "id_paket":2, "qty": 3
//         }
//     ]