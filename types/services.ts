export interface Service {
  id: number;
  name: string;
  phones: string[];
  category: string;
  hasDelivery: boolean;
  address?: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  services: Service[];
} 