import './NotFound.css';

const NotFound404 = () => {
    return (
        <section className="not-found">
            <h1 className="nt-fnd-el big-ttl">
                404
            </h1>
            <h3 className="nt-fnd-el smaller-ttl">
                Not Found
            </h3>
            <h4 className="nt-fnd-el smallest-ttl">
                The resource requested could not be found on this server!
            </h4>
        </section>
    );
}

export default NotFound404;