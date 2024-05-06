import { useState } from "react";
import Button from "leon4t-style";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<h1>Hello, world!</h1>
			<Button
				color={count === 0 ? "red" : count < 5 ? "orange" : "green"}
				onClick={() => setCount((c) => c + 1)}
			>
				{count === 0 ? "Click me!" : `Clicked ${count} times!`}
			</Button>
		</div>
	);
}

export default App;
