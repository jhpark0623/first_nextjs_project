const saveId = "pjh";
const savePw = "qkrwhdgns123";

const login = (req, res) => {
  console.log("---------방금 내가 찍은거-----------");

  const { id, pw } = req.body;

  if ("POST" !== req.method)
    return res
      .status(405)
      .json({ ok: false, message: "지원하지 않는 메서드 입니다." });

  if (!id) return res.json({ ok: false, message: "ID를 입력하세요" });
  if (!pw) return res.json({ ok: false, message: "PW를 입력하세요" });

  if (id === saveId && pw === savePw)
    res.json({ ok: true, message: "로그인 성공" });
  else if (id !== saveId)
    res.json({ ok: false, message: "등록되지 않은 아이디입니다" });
  else res.json({ ok: false, message: "비밀번호가 틀립니다" });

  res.json({ ok: true, message: "ok" });
};

export default login;
