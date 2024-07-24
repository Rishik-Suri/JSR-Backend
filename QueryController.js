import Query from "../MongoDb/Models/Query.js";

const createQuery = async (req, res) => {
    try {
      const { name,email,whatsapp,message } = req.body;
  
      const newRProject = await Query.create({
       
        name,
        email,
        whatsapp,
        message
      });
  
      return res.status(200).json(newRProject);
    } catch (error) {
      return res.status(500).json({ m: error.message });
    }
  };


  const getAllQueries = async (req, res) => {
    try {
      const ReleasedProjects = await Query.find();
      return res.status(200).json(ReleasedProjects);
    } catch (error) {
      return res.status(500).json({ m: error.message });
    }
  };



  const deleteQuery = async (req, res) => {
    try {
      const { id } = req.params;
      const RProject = await Query.findById({ _id: id });
      if (RProject) {
        await Query.findByIdAndDelete({ _id: id });
        return res.status(200).json({ message: "Project deleted successfully" });
      } else {
        return res.status(404).json({ message: "Project Not Found" });
      }
    } catch (error) {
      return res.status(500).json({ m: error.message });
    }
  };



  export{ createQuery,getAllQueries,deleteQuery};
  