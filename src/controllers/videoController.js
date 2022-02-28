export const trending = (req, res) => res.send("alalal");
export const see = (req, res) => {
  return res.send(`i watching #${req.params.id}`);
};
export const edit = (req, res) => {
  console.log(req.params);
  return res.send("edit");
};
export const search = (req, res) => res.send("search");
export const upload = (req, res) => res.send("upload");
export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("deleteVideo");
};
