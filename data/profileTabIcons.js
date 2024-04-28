import PostTab from "../components/Profile/PostTab";
import ReelsTab from "../components/Profile/ReelsTab";
import TaggedTabs from "../components/Profile/TaggedTab";

export const PROFILE_TAB_ICONS = [
  {
    tabName: "Post",
    component: PostTab,
    active: require("../assets/icons/icons-grid.png"),
  },
  {
    tabName: "Reels",
    component: ReelsTab,
    active: require("../assets/icons/icons-reels-outline.png"),
  },
  {
    tabName: "Tagged",
    component: TaggedTabs,
    active: require("../assets/icons/icons-tag-1.png"),
  },
];
