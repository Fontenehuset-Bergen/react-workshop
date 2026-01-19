interface MyProps {
  someText?: string;
}

function MyComponent({ someText = "test" }: MyProps) {
  return <p>{someText || "Eller du"}</p>;
}

export function Consumer() {
  return <MyComponent />;
}
