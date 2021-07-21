import { createConnection } from 'typeorm'

const connection = createConnection().then(() => console.log('connected'))

export default connection;
