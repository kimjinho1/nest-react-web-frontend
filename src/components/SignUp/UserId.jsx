import SignUpInput from "./SignUpInput";
import SignUpLabel from "./SignUpLabel";

const UserId = () => {
  return (
    <div>
      <SignUpLabel text={"아이디"}></SignUpLabel>
      <SignUpInput
        type="text"
        placeholder="4~20자리 / 영문, 숫자, 특수문자 '_' 사용가능"
        minLength="4"
        maxLength="20"
        required
        autoCapitalize="off"
        autoComplete="off"
      />
    </div>
  );
};
