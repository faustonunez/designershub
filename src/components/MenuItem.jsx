export function MenuItem(props) {
  const { text, ImageComponent, href } = props;

  function myFunction() {
    var x = document.getElementById("toggle");

    // Toggle the 'hidden' class to show or hide the element
    x.classList.toggle("hidden");
  }

  return (
    <a
      href={href}
      onClick={myFunction} // Attach the myFunction to the onClick event
      className="group flex items-center space-x-2 text-primary dark: dark:text-gray-300 hover:text-grey-10 p-2 hover:bg-primary hover:rounded-full mb-4 color-transition"
    >
      <ImageComponent />
      <p>{text}</p>
    </a>
  );
}
