import { wrapper } from "../../../../shell-mf-old/src/store/configureStore";
import { setButtonState } from "../../../../shell-mf-old/src/store/tasks";

export const getSSProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      // we can set the initial state from here
      // we are setting to false but you can run your custom logic here
      await store.dispatch(setButtonState("dashboard"));
      console.log("State on server", store.getState());
      return {
        props: {
          buttonState: "dashboard",
        },
      };
    }
);
