import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center p-5 md:p-24 bg-background">
			<h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight leading-relaxed lg:text-5xl">
				Welcome to Our Submition for the{" "}
				<span className=" bg-primary text-primary-foreground p-2 rounded">
					EdgeDB Hackathon!
				</span>
			</h1>
		</main>
	);
}
