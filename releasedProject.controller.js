import ReleasedProject from "../MongoDb/Models/releasedProject.js";

const createReleasedProject = async (req, res) => {
  try {
    const { title, img, producer, director, dop, link } = req.body;

    const newRProject = await ReleasedProject.create({
      title,
      img,
      producer,
      director,
      dop,
      link,
    });

    return res.status(200).json(newRProject);
  } catch (error) {
    return res.status(500).json({ m: error.message });
  }
};

const getAllReleasedProject = async (req, res) => {
  try {
    const ReleasedProjects = await ReleasedProject.find();
    return res.status(200).json(ReleasedProjects);
  } catch (error) {
    return res.status(500).json({ m: error.message });
  }
};

const getReleasedProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const RProject = await ReleasedProject.findById({ _id: id });
    if (RProject) {
      return res.status(200).json(RProject);
    } else {
      return res.status(404).json({ message: "Project Not Found" });
    }
  } catch (error) {
    return res.status(500).json({ m: error.message });
  }
};

const deleteReleasedProject = async (req, res) => {
  try {
    const { id } = req.params;
    const RProject = await ReleasedProject.findById({ _id: id });
    if (RProject) {
      await ReleasedProject.findByIdAndDelete({ _id: id });
      return res.status(200).json({ message: "Project deleted successfully" });
    } else {
      return res.status(404).json({ message: "Project Not Found" });
    }
  } catch (error) {
    return res.status(500).json({ m: error.message });
  }
};

const updateReleasedProject = async (req, res) => {
  try {
    const { id } = req.params;

    const { title, img, producer, director, dop, link } = req.body;

    const RProject = await ReleasedProject.findById({ _id: id });
    if (RProject) {
      await ReleasedProject.findByIdAndUpdate(
        { _id: id },
        {
          title,
          img,
          producer,
          director,
          dop,
          link,
        }
      );
      return res.status(200).json({ message: "Project updated successfully" });

    }else {
        return res.status(404).json({ message: "Project Not Found" });
      }
  } catch (error) {
    return res.status(500).json({ m: error.message });
  }
};

export {
  createReleasedProject,
  getAllReleasedProject,
  getReleasedProjectById,
  deleteReleasedProject,
  updateReleasedProject
};
