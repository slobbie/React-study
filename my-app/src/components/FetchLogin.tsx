

export const FetchLogin = async ({ id , password }: any) => {
  const response = await fetch("http://localhost:3001/users");

  if(response.ok) {

      const users= await response.json();

      const user = users.find((user: any) => user.id === id);
      if(!user || user.password !== password) {
        throw new Error("아이디 또는 비밀 번호가 일치하지 않습니다.");
    }
    return user;
  }
   throw new Error("서버와 통신이 원할하지 않습니다.")
};


