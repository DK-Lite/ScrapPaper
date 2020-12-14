import React from 'react';
import Section from './Styled'

const propTypes = {

}
const defaultProps = {

}
const NewsPaper = ({
    title,
    company,
    acticle,
    writer,
}) => {
    return (
        <Section>
            <Section.Title>
                <Section.Writer>
                </Section.Writer>
            </Section.Title>
        </Section>
    );
};
NewsPaper.propTypes = propTypes;
NewsPaper.defaultProps = defaultProps;
export default NewsPaper;