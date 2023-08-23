import footer from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={footer.container}>
      <div className={footer.content_wrapper}>
        <div className={`${footer.content_wrapper__element} ${footer.text_part}`}>
          <p>
            The text and graphic content of the website belongs to Rebit.ai and
            cannot be used by other resources without our permission and without
            the link to the source.
          </p>
          <p>© Rebit.ai 2023</p>
        </div>

        <div className={`${footer.content_wrapper__element} ${footer.links_block}`}>
          <p><a href="">Work</a></p>
          <p><a href="">Services</a></p>
          <p><a href="">About Us</a></p>
          <p><a href="">Careers</a></p>
        </div>

        <div className={`${footer.content_wrapper__element} ${footer.links_block}`}>
          <p><a href="">Blog</a></p>
          <p><a href="">Academy</a></p>
          <p><a href="">Privacy Policy</a></p>
        </div>
      </div>
    </div>
  );
}
