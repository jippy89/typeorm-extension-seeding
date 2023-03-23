import "reflect-metadata"
import { DataSource, DataSourceOptions } from "typeorm"
import { User } from "./entity/User"

const dataSourceOptions: DataSourceOptions = {
    type: 'sqlite',
    database: 'db.sqlite',
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
}

const dataSource = new DataSource(dataSourceOptions)

export default dataSource