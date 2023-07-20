interface ButtonProps extends React.ComponentProps<"button"> {}

export function Button({ children, ...props }: React.PropsWithChildren<ButtonProps>) {
  return (
    <button
      className="bg-blue-700 hover:bg-blue-500 transition-colors px-3 h-[32px] text-gray-100 font-medium uppercase text-sm rounded"
      {...props}
    >
      {children}
    </button>
  );
}
