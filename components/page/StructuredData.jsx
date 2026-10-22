const StructuredData = ({ schemas = [] }) => {
    if (!Array.isArray(schemas) || schemas.length === 0) return null;

    return (
        <>
            {schemas.map((schema, index) => (
                <script
                    key={`jsonld-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </>
    );
};

export default StructuredData;