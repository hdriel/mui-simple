import PropTypes from 'prop-types';

export const PT_sizeUnit = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

export const PT_elevation = PropTypes.number;

export const PT_pagination = PropTypes.shape({
    total: PropTypes.number,
    rowsPerPage: PropTypes.number,
    page: PropTypes.number,
});

export const PT_column = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
        field: PropTypes.string,
        numeric: PropTypes.bool,
        format: PropTypes.func,
        disablePadding: PropTypes.bool,
        label: PropTypes.string,
        align: PropTypes.oneOf(['right', 'center', 'left', 'justify', 'inherit']),
        dateFormat: PropTypes.string,
        props: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
        cmp: PropTypes.any,
        image: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.shape({
                width: PropTypes.number,
                height: PropTypes.number,
                avatar: PropTypes.bool,
            }),
        ]),
    }),
]);

export const PT_action = PropTypes.shape({
    tooltip: PropTypes.string,
    Cmp: PropTypes.node,
});

export const PT_colors = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
        background: PropTypes.string,
        color: PropTypes.string,
    }),
]);
