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

interface IRoverCamera {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
}
