const adminService = require("../services/admin.service");

//all user

module.exports.AllUser = async (req, res) => {
  try {
    const users = await adminServide.allUser();

    if (!users) {
      return res.status(404).json({ message: "users not found" });
    }

    return res
      .status(200)
      .json({ message: "all user fetch sucessfully", users });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

//delete single user
module.exports.DeleteUser = async (req, res) => {
    try {
        const id=req.params.id;
        const deleteuser=await adminService.deleteUser(id);   

        if(!deleteuser){
            return res.status(404).json({message:"user not found"});
        }   
        return res.status(200).json({message:"user deleted successfully"});
    } catch (error) {
        return res.status(400).json({message:error.message});
    }
};

//update user role
module.exports.UpdateUserRole=async(req,res)=>{
    try {
        const {role}=req.body; 

        const userId=req.params.id;
        
        if(req.user.role !=="admin"){
            return res.status(400).json({message:"Access denied !!"});
        }
        const user = await adminService.UpdateUserRole({userId, role });
        return res.status(200).json({message:"update role of user",user});

    } catch (error) {
        return res.status(400).json({message:error.message});
    }
}