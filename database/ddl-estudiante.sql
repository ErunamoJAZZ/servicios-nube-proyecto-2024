CREATE TABLE public.estudiante (
    id serial PRIMARY KEY,
    nombre varchar(50),
    apellido varchar(50),
    fecha_nacimiento date,
    direccion varchar(100),
    correo_electronico varchar(100),
    carrera varchar(50)
);

-- dummy data
INSERT INTO public.estudiante (nombre, apellido, fecha_nacimiento, direccion, correo_electronico, carrera)
VALUES
    ('Ana', 'López', '2000-04-10', 'Calle 321, Ciudad', 'ana.lopez@example.com', 'Ingeniería Informática'),
    ('Carlos', 'Rodríguez', '1999-08-22', 'Avenida 654, Ciudad', 'carlos@example.com', 'Arquitectura'),
    ('Sofía', 'Hernández', '1998-07-15', 'Calle 987, Ciudad', 'sofia@example.com', 'Contabilidad'),
    ('Diego', 'Gómez', '2001-01-05', 'Calle 123, Ciudad', 'diego@example.com', 'Ingeniería Mecánica'),
    ('Laura', 'Díaz', '1999-03-20', 'Avenida 456, Ciudad', 'laura@example.com', 'Enfermería'),
    ('Pedro', 'Ramírez', '1997-11-28', 'Calle 789, Ciudad', 'pedro@example.com', 'Economía'),
    ('Isabel', 'Torres', '1996-06-14', 'Avenida 654, Ciudad', 'isabel@example.com', 'Biología'),
    ('Miguel', 'Pérez', '2002-09-08', 'Calle 321, Ciudad', 'miguel@example.com', 'Historia'),
    ('Carolina', 'García', '2000-02-25', 'Avenida 987, Ciudad', 'carolina@example.com', 'Física'),
    ('Andrés', 'López', '1998-05-12', 'Calle 123, Ciudad', 'andres@example.com', 'Matemáticas'),
    ('Vincent', 'Restrepo', '1990-03-26', 'Calle 20, Ciudad', 'vincent@example.com', 'Ingeniería Informática'),
    ('Elena', 'Gómez', '1997-09-18', 'Avenida 1234, Ciudad', 'elena@example.com', 'Ingeniería Eléctrica'),
    ('Roberto', 'Fernández', '1996-12-05', 'Calle 5678, Ciudad', 'roberto@example.com', 'Ciencias de la Computación'),
    ('Fernanda', 'Sánchez', '1999-02-28', 'Calle 9999, Ciudad', 'fernanda@example.com', 'Psicología'),
    ('Julio', 'Martínez', '2001-05-10', 'Avenida 5555, Ciudad', 'julio@example.com', 'Medicina'),
    ('Patricia', 'Torres', '1998-08-22', 'Calle 3333, Ciudad', 'patricia@example.com', 'Derecho'),
    ('Raúl', 'López', '1995-04-15', 'Avenida 7777, Ciudad', 'raul@example.com', 'Arquitectura'),
    ('Natalia', 'Hernández', '2000-07-20', 'Calle 2222, Ciudad', 'natalia@example.com', 'Contabilidad'),
    ('Andrea', 'Ramírez', '1997-10-12', 'Calle 1111, Ciudad', 'andrea@example.com', 'Ingeniería Civil'),
    ('Hugo', 'González', '1996-03-28', 'Avenida 8888, Ciudad', 'hugo@example.com', 'Historia del Arte'),
    ('Silvia', 'Pérez', '2002-01-08', 'Calle 4444, Ciudad', 'silvia@example.com', 'Biomedicina');
