import React from 'react'

function MultiplesImagenes() {


    return (
        <div>
            <form action="" encType='multipart/form-data' method='post'>
                <div className="form-group">
                    <input type="file" className="form-control-file" name="uploaded_file" multiple />
                    <input type="submit" className="btn btn-default" />
                </div>


            </form>

        </div>
    )
}

export default MultiplesImagenes