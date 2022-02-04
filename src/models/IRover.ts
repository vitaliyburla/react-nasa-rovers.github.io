export interface IRover {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
    max_sol: number;
    max_date: string;
    total_photos: number;
    cameras: IRoverCamera[];
}

export interface IRoverCamera {
    name: string;
    full_name: string;
}

export interface IRoverPhoto {
    id: number;
    sol: number;
    camera: IRoverCamera;
    img_src: string;
    earth_date: string;
}
