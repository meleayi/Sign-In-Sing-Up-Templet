import { cookies } from "next/headers";

export const signIn = async () => {
  try {
    // const { account } = await createAdminClient();
    // const session = await account.createEmailPasswordSession(email, password);
    // cookies().set("appwrite-session", session.secret, {
    //   path: "/",
    //   httpOnly: true,
    //   sameSite: "strict",
    //   secure: true,
    // });
    // const user = await getUserInfo({ userId: session.userId });
    // return parseStringify(user);
  } catch (error) {
    console.error("Error", error);
  }
};

export const signUp = async () => {
  let newUserAccount;

  try {
  } catch (error) {
    console.error("Error", error);
  }
};

export async function getLoggedInUser() {
  try {
  } catch (error) {
    console.log(error);
    return null;
  }
}

export const logoutAccount = async () => {
  try {
  } catch (error) {
    return null;
  }
};
