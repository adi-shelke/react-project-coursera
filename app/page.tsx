
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="flex w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg.jpg')" }}
    >
      {/* Left Section */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-opacity-50 bg-black p-8">
        <h1 className="text-white text-5xl font-bold mb-4 text-center">
          Welcome To <br /> Paradise Nursery
        </h1>
        <div className="w-16 h-1 bg-green-500 mb-6"></div>
        <p className="text-white text-xl mb-6 text-center">
          Where Green Meets Serenity
        </p>
        <Link href="/products">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </Link>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex flex-col justify-center text-white p-8 bg-opacity-50 bg-black">
        <h2 className="text-3xl font-bold mb-4">
          Welcome to Paradise Nursery, where green meets serenity!
        </h2>
        <p className="text-lg mb-4">
          At Paradise Nursery, we are passionate about bringing nature closer to
          you. Our mission is to provide a wide range of high-quality plants
          that not only enhance the beauty of your surroundings but also
          contribute to a healthier and more sustainable lifestyle. From
          air-purifying plants to aromatic fragrant ones, we have something for
          every plant enthusiast.
        </p>
        <p className="text-lg mb-4">
          Our team of experts is dedicated to ensuring that each plant meets our
          strict standards of quality and care. Whether you&apos;re a seasoned
          gardener or just starting your green journey, we&apos;re here to support
          you every step of the way. Feel free to explore our collection, ask
          questions, and let us help you find the perfect plant for your home or
          office.
        </p>
        <p className="text-lg">
          Join us in our mission to create a greener, healthier world. Visit
          Paradise Nursery today and experience the beauty of nature right at
          your doorstep.
        </p>
      </div>
    </div>
  );
}
