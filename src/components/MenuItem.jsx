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
      className="group flex items-center space-x-2 text-grey-100 dark:text-grey-0 hover:text-grey-0 p-2 hover:bg-grey-100 dark:hover:text-grey-100 dark:hover:bg-grey-0 rounded-full hover:rounded-full mb-4 transition-none"
    >
      <ImageComponent />
      <p>{text}</p>
    </a>
  );
}
