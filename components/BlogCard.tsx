

interface BProps {
    title: string,
    desc: string
}

const BlogCard: React.FC<BProps>= ({ title, desc }): JSX.Element => {
    return (
        <div className="bg-primary p-3 rounded">
            <h1 className='text-text3 text-3xl font-semibold'>{title}</h1>
            <p className='text-text2'>{desc}</p>
        </div>
    )
};

export default BlogCard;