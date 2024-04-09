const config = {
    host: 'localhost',
    port: 5432,
    database: 'sgBoda',
    user: 'postgres',
    password: 'sgboda',
  };

  async function registerAnswer(asistira, email, nombre) {
    // Conectarse a la base de datos
    const client = new pg.Client(config);
    await client.connect();
  
    // Buscar al usuario
    const query = `
      SELECT * FROM invitados
      WHERE correo_electronico = $1
    `;
  
    const user = await client.query(query, [email]);
  
    if (user.rows.length === 0) {
      // Insertar un nuevo registro
      const insertQuery = `
        INSERT INTO invitados (nombre, correo_electronico, asistira)
        VALUES ($1, $2, $3)
      `;
  
      await client.query(insertQuery, [nombre, email, asistira]);
  
      console.log('Usuario registrado correctamente');
    } else {
      // Actualizar el campo asistira y nombre (si se proporciona)
      const updateQuery = `
        UPDATE invitados
        SET asistira = $1, nombre = $2
        WHERE correo_electronico = $3
      `;
  
      await client.query(updateQuery, [asistira, nombre, email]);
  
      console.log('Respuesta registrada correctamente');
    }
  
    // Cerrar la conexión a la base de datos
    await client.end();
  }

  module.exports = registerAnswer;