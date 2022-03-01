export const trending = (req, res) => {
  const videos = [
    {
      title: "Video #1",
      rating: 5,
      comments: 2,
      createdAt: "2 min ago",
      views: 59,
      id: 1,
    },
    {
      title: "Video #2",
      rating: 5,
      comments: 2,
      createdAt: "2 min ago",
      views: 59,
      id: 1,
    },
    {
      title: "Video #3",
      rating: 5,
      comments: 2,
      createdAt: "2 min ago",
      views: 59,
      id: 1,
    },
  ];
  return res.render("home", { pageTitle: "Home", videos });
};
export const see = (req, res) => {
  return res.render("watch", { pageTitle: "Watch" });
};
export const edit = (req, res) => {
  return res.render("edit", { pageTitle: "Edit" });
};
export const search = (req, res) => res.send("search");
export const upload = (req, res) => res.send("upload");
export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("deleteVideo");
};
