import Upcoming from "../MongoDb/Models/Upcoming.js";

const createUpcoming = async (req, res) => {
    try {
      const {title,img,director } = req.body;
  
      const newRProject = await Upcoming.create({
        title,
        img,
        director
      });
  
      return res.status(200).json(newRProject);
    } catch (error) {
      return res.status(500).json({ m: error.message });
    }
  };


  const getAllUpcoming = async (req, res) => {
    try {
      const ReleasedProjects = await Upcoming.find();
      return res.status(200).json(ReleasedProjects);
    } catch (error) {
      return res.status(500).json({ m: error.message });
    }
  };



  const deleteUpcoming = async (req, res) => {
    try {
      const { id } = req.params;
      const RProject = await Upcoming.findById({ _id: id });
      if (RProject) {
        await Upcoming.findByIdAndDelete({ _id: id });
        return res.status(200).json({ message: "Project deleted successfully" });
      } else {
        return res.status(404).json({ message: "Project Not Found" });
      }
    } catch (error) {
      return res.status(500).json({ m: error.message });
    }
  };



  export{ createUpcoming,getAllUpcoming,deleteUpcoming};