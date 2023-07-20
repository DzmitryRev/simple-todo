interface InputProps extends React.ComponentProps<"input"> {}

export function TextInput({ ...props }: InputProps) {
  return (
    <input {...props} className={"border rounded border-gray-300 px-3 h-[32px]"} type="text" />
  );
}
