const { Carrera, Materia } = require('./models');

// Obtener carreras
exports.getAllCarreras = async (req, res) => {
    try {
        const carreras = await Carrera.find({});
        res.status(200).json(carreras);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear carrera
exports.crearCarrera = async (req, res) => {
    try {
        const carrera = new Carrera(req.body);
        await carrera.save();
        res.status(201).json(carrera);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obtener especifica
exports.carreraById = async (req, res) => {
    try {
        const carrera = await Carrera.findById(req.params.id);
        if (!carrera) {
            res.status(404).json({ message: "Carrera no encontrada" });
        } else {
            res.status(200).json(carrera);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear una dentro
exports.crearMateria = async (req, res) => {
    try {
        const carrera = await Carrera.findById(req.params.id);
        if (carrera) {
            const materia = new Materia({ ...req.body, carrera_Id: carrera._id });
            await materia.save();
            carrera.materias.push(materia._id);
            await carrera.save();
            res.status(201).json(materia);
        } else {
            res.status(404).json({ message: "Carrera no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener todas las materias
exports.getMaterias = async (req, res) => {
    try {
        const carrera = await Carrera.findById(req.params.id).populate('materias');
        if (carrera) {
            res.status(200).json(carrera);
        } else {
            res.status(404).json({ message: "Carrera no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};