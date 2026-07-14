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

**a. Método HTTP:** `GET`

**b. URI:**
```text
/pelicula/123
```

**c. JSON enviado**

No aplica. El ID se identifica en la URL.

**d. JSON recibido**
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

**a. Método HTTP:** `PUT`

**b. URI:**
```text
/pelicula/123
```

**c. JSON enviado**
```json
{
  "año": 2001,
  "director": "Andrew Adamson y Vicky Jenson",
  "duracion": 90
}
```

**d. JSON recibido**
```json
{
  "code": 200,
  "msg": "Película actualizada"
}
```

---

## 4. Borrar una película por su ID

**a. Método HTTP:** `DELETE`

**b. URI:**
```text
/pelicula/123
```

**c. JSON enviado**

No aplica. El ID se identifica en la URL.

**d. JSON recibido**
```json
{
  "code": 200,
  "msg": "Película eliminada"
}
```