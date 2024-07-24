import Future from "../MongoDb/Models/Future.js";

const createFuture = async (req, res) => {
    try {
      const {title,img,director } = req.body;
  
      const newRProject = await Future.create({
        title,
        img,
        director
      });
  
      return res.status(200).json(newRProject);
    } catch (error) {
      return res.status(500).json({ m: error.message });
    }
  };


  const getAllFuture = async (req, res) => {
    try {
      const ReleasedProjects = await Future.find();
      return res.status(200).json(ReleasedProjects);
    } catch (error) {
      return res.status(500).json({ m: error.message });
    }
  };



  const deleteFuture = async (req, res) => {
    try {
      const { id } = req.params;
      const RProject = await Future.findById({ _id: id });
      if (RProject) {
        await Future.findByIdAndDelete({ _id: id });
        return res.status(200).json({ message: "Project deleted successfully" });
      } else {
        return res.status(404).json({ message: "Project Not Found" });
      }
    } catch (error) {
      return res.status(500).json({ m: error.message });
    }
  };



  export{ createFuture,getAllFuture,deleteFuture};