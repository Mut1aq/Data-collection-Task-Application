export class Survey {
  constructor(
    public SRV_ID: number,
    public SURVEY_STATUS_AR: string,
    public SURVEY_STATUS_EN: string,
    public SurveyName: string,
    public SurveyNameAr: string,
    public SurveyNameEn: string,
    public SurveyPeriods: string,
    public SystemType: number,
    public TEMPLATE_ID: number,
    public TemplateName: string,
    public TemplateNameAr: string,
    public TemplateNameEn: string
  ) {}
}
