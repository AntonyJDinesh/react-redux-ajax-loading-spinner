import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

class LoadingSpinnerComp extends React.Component {
    render() {
        return (
            <div style={{
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                transition: 'opacity 500ms',
                opacity: 1
            }}
            >
                <div style={{top: '50%', left: '50%', position: 'relative'}} >
                    <CircularProgress />
                </div>
            </div>
        );
    }
}

export default LoadingSpinnerComp;