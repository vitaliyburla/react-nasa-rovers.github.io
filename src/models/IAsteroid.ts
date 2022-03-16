export interface IAsteroidsData {
    links: {
        next: string;
        prev?: string;
        self: string;
    };
    page: {
        size: number;
        total_elements: number;
        total_pages: number;
        number: number;
    };
    near_earth_objects: IAsteroid[];
}

interface IAsteroid {
    id: number;
    name: string;
    name_limited: string;
    designation: number;
    estimated_diameter: {
        kilometers: {
            estimated_diameter_min: number;
            estimated_diameter_max: number;
        };
        miles: {
            estimated_diameter_min: number;
            estimated_diameter_max: number;
        };
    };
    is_potentially_hazardous_asteroid: boolean;
    close_approach_data: ICloseApproachData[];
}

interface ICloseApproachData {
    close_approach_date: string;
    close_approach_date_full: string;
    relative_velocity: {
        kilometers_per_hour: string;
        miles_per_hour: string;
    };
    miss_distance: {
        kilometers: string;
        miles: string;
    };
    orbiting_body: string;
}
