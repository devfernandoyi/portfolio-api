export class CreatePetLogDto {
  petId: number;
  weight?: number;
  length?: string;
  fed: boolean;
  fedWhat?: string;
  hotTemp?: number;
  coolTemp?: number;
  humidity?: number;
  shed: boolean;
  fecal: boolean;
  notes?: string;
}
