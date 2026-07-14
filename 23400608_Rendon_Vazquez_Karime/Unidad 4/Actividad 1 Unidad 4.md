# Actividad 1 - Unidad 4

## 1. Crear una película

**a. Descripción:** Crear una película.

**b. Método HTTP:** `POST`

**c. URI:**
```text
/pelicula
```

**d. JSON enviado**
```json
{
  "_id": 123,
  "nombre": "Shrek",
  "director": "Andrew Adamson y Vicky Jenson",
  "año": 2001,
  "duracion": 90,
  "genero": "Comedia"
}
```

**e. JSON recibido**
```json
{
  "code": 200,
  "msg": "Película creada"
}
```

---

## 2. Consultar una película por su ID

**a. Descripción:** Consultar una pelicula.

**b. Método HTTP:** `GET`

**c. URI:**
```text
/pelicula/123
```

**d. JSON enviado**

No aplica. El ID se identifica en la URL.

**e. JSON recibido**
```json
{
  "code": 200,
  "msg": "Información consultada",
  "_id": 123,
  "nombre": "Shrek",
  "director": "Andrew Adamson y Vicky Jenson",
  "año": 2001,
  "duracion": 90,
  "genero": "Comedia"
}
```

---

## 3. Actualizar el año, director y duración de una película por su ID

**a. Descripción:** Actualizar una pelicula.

**b. Método HTTP:** `PUT`

**c. URI:**
```text
/pelicula/123
```

**d. JSON enviado**
```json
{
  "año": 2001,
  "director": "Andrew Adamson y Vicky Jenson",
  "duracion": 90
}
```

**e. JSON recibido**
```json
{
  "code": 200,
  "msg": "Película actualizada"
}
```

---

## 4. Borrar una película por su ID

**a. Descripción:** Eliminar una pelicula.

**b. Método HTTP:** `DELETE`

**c. URI:**
```text
/pelicula/123
```

**d. JSON enviado**

No aplica. El ID se identifica en la URL.

**e. JSON recibido**
```json
{
  "code": 200,
  "msg": "Película eliminada"
}
```