import * as MOCKED_DATA from "../__mocks__/datamocked";


async function getURL(id, userswitch, uri) {

  if (userswitch === "mock") {
    switch (uri) {
      case "":
        const MOCKED_USER = MOCKED_DATA.USER_MAIN_DATA.find(
          (user) => user.id === parseInt(id)
        );
          
        return MOCKED_USER;
      case "activity":
        const MOCKED_USER_ACTIVITY = MOCKED_DATA.USER_ACTIVITY.find(
          (user) => user.userId === parseInt(id)
        );

        return MOCKED_USER_ACTIVITY;
      case "average-sessions":
        const MOCKED_USER_AVERAGE_SESSIONS =
          MOCKED_DATA.USER_AVERAGE_SESSIONS.find(
            (user) => user.userId === parseInt(id)
          );
          
        return MOCKED_USER_AVERAGE_SESSIONS;
      case "performance":
        const MOCKED_USER_PERFORMANCE = MOCKED_DATA.USER_PERFORMANCE.find(
          (user) => user.userId === parseInt(id)
        );
        return MOCKED_USER_PERFORMANCE;
      default:
        break;
    }
  }
}


async function getUser(id, userswitch) {
  return await getURL(id, userswitch, "");
}


async function getActivity(id, userswitch) {
  return await getURL(id, userswitch, "activity");
}


async function getAverageSessions(id, userswitch) {
  return await getURL(id, userswitch, "average-sessions");
}


async function getPerformance(id, userswitch) {
  return await getURL(id, userswitch, "performance");
}

export { getUser, getActivity, getAverageSessions, getPerformance };
