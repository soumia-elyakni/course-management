import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProffesseurModule } from './proffesseur/proffesseur.module';
import { StudentsModule } from './students/students.module';
import { StudentModule } from './student/student.module';
import { CoursesModule } from './courses/courses.module';
import { ProfessorModule } from './professor/professor.module';
import { CourseModule } from './course/course.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [ProffesseurModule, StudentsModule, StudentModule, CoursesModule, ProfessorModule, CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
